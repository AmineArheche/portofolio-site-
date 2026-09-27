/**
 * GitHub Dynamic Synchronization Service
 * Automatically fetches public repositories for Amine Arheche,
 * seamlessly merging curated showcase projects with any new repositories
 * created in real-time.
 */

const GITHUB_USERNAME = 'AmineArheche';
const CACHE_KEY = 'amine_portfolio_github_repos_v2';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes cache to protect rate limits

// Internal or non-project repositories to exclude from portfolio showcase
const EXCLUDED_REPOS = new Set([
  'AmineArheche',
  'aminearheche.github.io',
  'portofolio-site-',
  'dd201'
]);

// Map programming languages and topics to portfolio categories
const inferCategory = (language, topics = []) => {
  const lang = (language || '').toLowerCase();
  const lowerTopics = (topics || []).map((t) => t.toLowerCase());

  if (
    lowerTopics.includes('fullstack') ||
    lowerTopics.includes('api') ||
    lowerTopics.includes('fastapi') ||
    lowerTopics.includes('backend')
  ) {
    return 'fullstack';
  }

  if (
    lowerTopics.includes('desktop') ||
    lowerTopics.includes('gui') ||
    lowerTopics.includes('system') ||
    ['python', 'c', 'c++', 'c#', 'rust', 'go'].includes(lang)
  ) {
    return 'desktop';
  }

  if (
    lowerTopics.includes('web') ||
    lowerTopics.includes('frontend') ||
    lowerTopics.includes('ecommerce') ||
    ['javascript', 'typescript', 'php', 'html', 'css'].includes(lang)
  ) {
    return 'web';
  }

  return 'fullstack';
};

// Harmonious gradient colors based on primary technology
const inferColor = (language) => {
  const lang = (language || '').toLowerCase();
  switch (lang) {
    case 'python':
      return '#38bdf8'; // Sky
    case 'javascript':
      return '#facc15'; // Amber/Yellow
    case 'typescript':
      return '#60a5fa'; // Blue
    case 'php':
      return '#818cf8'; // Indigo
    case 'c':
    case 'c++':
      return '#c084fc'; // Purple
    case 'html':
    case 'css':
      return '#f43f5e'; // Rose
    default:
      return '#10b981'; // Emerald
  }
};

// Format raw slug repository names into readable, stylized titles
const formatTitle = (name) => {
  return name
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
};

/**
 * Fetch raw repos from GitHub API or localStorage cache
 */
export async function getGitHubRepositories() {
  // 1. Try local cache
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_TTL_MS && Array.isArray(parsed.repos)) {
        return parsed.repos;
      }
    }
  } catch (err) {
    console.warn('GitHub cache read error:', err);
  }

  // 2. Fetch fresh data from GitHub REST API
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: HTTP ${response.status}`);
    }

    const repos = await response.json();

    if (Array.isArray(repos)) {
      try {
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ timestamp: Date.now(), repos })
        );
      } catch (e) {
        // Quota or incognito mode exception
      }
      return repos;
    }
  } catch (error) {
    console.warn('Using local fallback projects, GitHub fetch failed:', error.message);
  }

  return [];
}

/**
 * Merge curated baseline projects with live repositories
 */
export function mergeProjectsWithGitHub(curatedProjects, githubRepos) {
  if (!Array.isArray(githubRepos) || githubRepos.length === 0) {
    return curatedProjects;
  }

  const existingRepoNames = new Set(
    curatedProjects.map((p) => {
      if (p.github) {
        const parts = p.github.split('/');
        return parts[parts.length - 1].toLowerCase();
      }
      return p.id.toLowerCase();
    })
  );

  // Filter valid projects from GitHub
  const newDiscoveredProjects = [];

  for (const repo of githubRepos) {
    if (repo.fork || EXCLUDED_REPOS.has(repo.name)) {
      continue;
    }

    const repoNameLower = repo.name.toLowerCase();

    // If it's already curated, skip adding duplicate card
    if (existingRepoNames.has(repoNameLower)) {
      continue;
    }

    // This is a brand NEW project repository created by the user!
    const category = inferCategory(repo.language, repo.topics);
    const color = inferColor(repo.language);
    const techStack = [
      repo.language,
      ...(repo.topics || []).slice(0, 3)
    ].filter(Boolean);

    newDiscoveredProjects.push({
      id: `gh-${repo.name.toLowerCase()}`,
      title: formatTitle(repo.name),
      category: category,
      featured: repo.stargazers_count > 0,
      tagline: repo.description || 'Open-source software repository on GitHub',
      description:
        repo.description ||
        `Engineering project developed by Amine Arheche. Check the repository for full source code and documentation.`,
      longDescription: `${
        repo.description || 'Modern software development project.'
      }\n\nEngineered with ${repo.language || 'clean modular code'}. Automatically synchronized from GitHub repository @${GITHUB_USERNAME}/${repo.name}.`,
      technologies: techStack.length > 0 ? techStack : ['Open Source', 'Git'],
      metrics: [
        { label: 'GitHub Stars', value: `${repo.stargazers_count} ★` },
        { label: 'Forks', value: `${repo.forks_count}` },
        { label: 'Branch', value: repo.default_branch || 'main' }
      ],
      github: repo.html_url,
      live: repo.homepage || null,
      color: color,
      highlights: [
        `Live Auto-Sync: GitHub Repository @${GITHUB_USERNAME}/${repo.name}`,
        `Primary Language: ${repo.language || 'General Architecture'}`,
        repo.license ? `License: ${repo.license.spdx_id || repo.license.name}` : 'Open-source Software'
      ],
      isAutoSynced: true
    });
  }

  // Curated featured projects first, followed by dynamically synced repos
  return [...curatedProjects, ...newDiscoveredProjects];
}
