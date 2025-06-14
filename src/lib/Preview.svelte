<script lang="ts">
const { selected } = $props();
import { fly, slide } from "svelte/transition";
import { ArrowRight } from "lucide-svelte";
type Project = {
	client: string;
	company: string;
	title: string;
	type: string;
	link: string;
	icon: string;
	year: string;
	description?: string;
	image?: any;
};
import cdcs from "../assets/cdcs.png";

const projects: Project[] = [
	{
		client: "Myself",
		company: "Myself?",
		title: "Cross-Device Clipboard Sync",
		type: "Personal Tool, Application, PWA",
		link: "https://cdcs-clipboard.vercel.app/",
		icon: "https://cdcs-clipboard.vercel.app/favicon.svg",
		year: "2025",
		description:
			"CDCS is a free, open-source tool that lets you sync your clipboard text from a mobile device to your desktop seamlessly. Built for simplicity and speed, CDCS is perfect for developers, writers, or anyone who constantly switches between devices.",
		image: cdcs,
	},
	{
		client: "Myself",
		company: "Myself?",
		title: "iTrack",
		type: "Vehicle Tracker, Web App",
		link: "https://itrack-v1.vercel.app/",
		icon: "https://itrack-v1.vercel.app/vite.svg",
		year: "2025",
	},
	{
		client: "Myself",
		company: "Myself?",
		title: "JobTrackR",
		type: "NLP, Notes, Web App",
		link: "https://jobtrackr-nu.vercel.app",
		icon: "https://itrack-v1.vercel.app/vite.svg",
		year: "2025",
	},
];
</script>
  <div class="project-container" in:slide>
{#if selected === "CDCS"}
  {@render project(projects[0])}
{:else if selected === "iTrack"}
  {@render project(projects[1])}
{:else if selected === "JobTrackR"}
  {@render project(projects[2])}
{/if}
</div>

{#snippet project(project: Project)}
    <div class="summary">
      <div class="info">
        <span>Client:</span> <span>{project.client}</span>
        <span>Company:</span> <span>{project.company}</span>
        <span>Project Type:</span> <span>{project.type}</span>
        <span>Year:</span> <span>{project.year}</span>
      </div>
    </div>
    <div class="details">

      <img id="icon" src={project.icon} alt={project.title} loading="lazy">

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <a href={project.link} target="_blank">Visit here <ArrowRight  size="14" /></a>

      <img src={project.image} alt={project.title} id="mock">
    </div>
{/snippet}

<style>
  .project-container {
    min-height: 100%;
  }
  .summary {
    margin: 0.25rem;
    padding: 0.75rem;
    border-radius: .5rem;
    background-color: hsl(0, 0%, 92.5%);
    .info {
      display: grid;
      font-size: 90%;
      grid-template-columns: max-content auto;
      gap: .5rem;
      span:nth-child(odd) {
        color: hsl(0, 0%,30%);
      }
    }
  }

  .details {
    padding: .75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      text-indent: 2rem;
      text-align: justify;
      font-size: 90%
    }

    a {
      display: flex;
      align-items: center;
      font-weight: bold;
      gap: 0.25rem;
      width: max-content;
      color: white;
      font-size: 12px;
      text-decoration: none;
      background: black;
      padding: 0.5rem 0.75rem;
      border-radius: 0.5rem;
      &:hover {
        background: hsl(0, 0%, 20%);
      }
    }
  }
  #icon {
    width: 4rem;
    border-radius: 100%;
  }
  #mock {
    width: 100%;
    background: hsl(0, 0%, 95%);
    border-radius: .5rem;
    margin: auto;
    border-top: 1px solid white;
    border-left: 1px solid white;
    box-shadow: 5px 10px 15px 0px rgba(0, 0, 0, 0.2);
  }
</style>
