// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mriveratoledo', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['mriveratoledo/microbiome-analysis', 'mriveratoledo/genome'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'I-Search Paper',
          description: 'In this paper I researched the gender bias in higher education systems,specificallly in science.',
          imageUrl:'https://img.icons8.com/ios/100/pdf-2.png',
          link:'https://mriveratoledo.github.io/I-search%20paper%20final%20draft.pdf',
        },
        {
          title: 'Draft Genome Sequence of Maricaulis maris Paper',
          description:'This paper is a genomic sequence research paper that was jointly written in a Bioinformatics course.',
          imageUrl: 'https://img.icons8.com/ios/100/pdf-2.png',
          link: 'https://mriveratoledo.github.io/MRA_template_prokaryotic-eukaryotic_genome.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Melanie Rivera',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'mcriveratoledo@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/mriveratoledo/mriveratoledo.github.io/raw/main/MelanieRiveraCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Bioinformatics',
    'Proficient in Linux',
    'Management',
  ],
  experiences: [
    {
      company: 'In N Out Burger',
      position: 'Associate',
      from: 'July 2019',
      to: 'Present',
      companyLink: '',
    },
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'California State University Stanislaus',
      degree: 'Bachelors Degree in Biological Sciences',
      from: '2021',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'Draft Genome Sequence of Maricaulis maris DSM 4734 isolated from filtered polluted sea water',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcements',
      authors: 'Melanie Rivera, Chioma Chibuko, Elias Figueiredo,Sebastian Lepe, Joseph Sada',
      link: 'https://github.com/mriveratoledo/mriveratoledo.github.io/raw/main/MRA_template_prokaryotic-eukaryotic_genome.pdf',
      description:
        'This is a manuscript in submission. Here, we report the genome of Maricaulis maris DSM 4734 isolated from filtered polluted seawater. The whole genome was 3568848 bp long, with a GC content of 63.14%, and resistance to 12 antibiotics.',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'valentine',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

enablePWA: true,
};

export default CONFIG;
