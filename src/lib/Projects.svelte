<script lang="ts">
  import { Dot, ArrowRight, ChevronRight } from "lucide-svelte";
  import { link } from "svelte-spa-router";
  // import { onMount } from "svelte";
  //
  // onMount(async () => {
  //   const res = await fetch("https://api.github.com/users/Sophistiqq/repos");
  //   let repos = [];
  //   if (res.ok) {
  //     repos = await res.json();
  //     console.log(repos);
  //   } else {
  //     console.log("Failed");
  //   }
  // });

  const projects: {
    title: string;
    info: string;
    link: string;
    icon: string;
  }[] = [
    {
      title: "Cross-Device Clipboard Sync",
      info: "Personal Tool, Application, PWA",
      link: "https://cdcs-clipboard.vercel.app/",
      icon: "https://cdcs-clipboard.vercel.app/favicon.svg",
    },
    {
      title: "iTrack",
      info: "Vehicle Tracker, Web App",
      link: "https://itrack-v1.vercel.app/",
      icon: "https://itrack-v1.vercel.app/vite.svg",
    },
    {
      title: "JobTrackR",
      info: "NLP, Notes, Web App",
      link: "https://jobtrackr-nu.vercel.app",
      icon: "https://itrack-v1.vercel.app/vite.svg",
    },
  ];
</script>

<div class="container">
  <div class="header">
    <span>Recent Projects</span>
    <Dot color="gray" size="24" />
    <a href="/projects" use:link
      >View All <ArrowRight color="gray" size="14" /></a
    >
  </div>

  <div class="projects-list">
    {#each projects as project}
      <div class="project">
        <img src={project.icon} alt="" />
        <div class="project-info">
          <p class="title">{project.title}</p>
          <p class="info">{project.info}</p>
        </div>

        <a href={project.link} target="_blank">
          <ChevronRight size="14" color="gray" />
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    background: hsl(0, 0%, 92.5%);
    margin: 0.25rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    margin-block: 1rem;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-weight: bold;
        font-size: 14px;
      }

      a {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        color: black;
        margin-left: auto;
        text-decoration: none;
        font-size: 12px;
        background: white;
        padding: 0.4rem 0.6rem;
        border-radius: 0.5rem;
        font-weight: bold;
        transition: background 0.2s ease-in-out;

        &:hover {
          background: hsl(0, 0%, 85%);
        }
      }
    }
  }

  .projects-list {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-block: 1rem;
    gap: 1rem;
    .project {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      width: 100%;
      background: white;
      padding: 0.5rem;
      border-radius: 0.5rem;
      box-shadow: 1px 1px 5px 1px lightgray;
      cursor: pointer;
      img {
        width: 30px;
        border-radius: 100%;
      }
      a {
        margin-left: auto;
      }

      .project-info {
        .title {
          font-weight: bold;
          font-size: 14px;
        }
        .info {
          font-size: 13px;
          color: hsl(0, 0%, 30%);
        }
      }
    }
  }
</style>
