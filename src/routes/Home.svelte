<script lang="ts">
import { Dot, Facebook, Github, Instagram, Send } from "lucide-svelte";
import avatar from "../assets/Avatar.jpg";
import HireForm from "../lib/HireForm.svelte";
import Nav from "../lib/Nav.svelte";
import Preview from "../lib/Preview.svelte";
import Projects from "../lib/Projects.svelte";

import { slide } from "svelte/transition";
type Project = "CDCS" | "iTrack" | "JobTrackR";
let selected: Project = $state("CDCS");
function selectProject(project: Project) {
	selected = project;
	window.scroll({ top: 1000, behavior: "smooth" });
}
let show_hire = $state(false);
export function showHire() {
	show_hire = !show_hire;
}
</script>

<main>
  <div class="intro" in:slide={{ axis: 'y', delay: 500}}>
    <Nav {showHire} {show_hire} />

    <div class="summary">
      <div class="header">
        <span>Software Developer</span>
        <Dot color="gray" size="24" />
        <p class="availability">AVAILABLE FOR WORK</p>
      </div>

      <div class="info">
        <div class="texts">
          <h2>I'm Roi Borromeo</h2>
          <p>Junior Programmer from Rizal, Philippines</p>
          <p>an IT Graduate</p>
          <div class="actions">
            <a href="https://github.com/Sophistiqq" target="_blank">
              <Github size="16" />
              Github
            </a>
            <a href="mailto:roi.for.school@gmail.com" target="_blank">
              <Send size="16" />
              Email me
            </a>
          </div>
        </div>
        <div class="avatar">
          <img src={avatar} alt="Sophistiqq" />
        </div>
      </div>

      <div class="projects">
        <Projects {selectProject} />
      </div>
    </div>

    <div class="socials">
      <h5>Socials: </h5>
      <a href="https://github.com/Sophistiqq" target="_blank" rel="noopener">
        <Github />
      </a>
      <a href="https://facebook.com/PIMD.xD" target="_blank" rel="noopener">
        <Facebook />
      </a>
      <a href="https://instagram.com/sophistiqq" target="_blank" rel="noopener">
        <Instagram />
      </a>
    </div>
  </div>
  <div class="preview" in:slide={{axis:"y", delay: 500}}>
  {#if show_hire === false }
    <Preview  {selected} />
  {:else}
    <HireForm />
  {/if}
  </div>
</main>

<style>
main {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  width: 100vw;
  gap: 1rem;
}
.intro {
  display: flex;
  flex-direction: column;
  min-width: 500px;
  height: 100%;
  width: 40vw;
  max-width: 45vw;
  gap: 1rem;
  & > div {
    box-shadow: 5px 10px 15px 0px rgba(0, 0, 0, 0.2);
  }
}
.preview {
  display: flex;
  flex-direction: column;
  min-width: 500px;
  width: 40vw;
  max-width: 45vw;
  background: white;
  border-radius: .5rem;
    box-shadow: 5px 10px 15px 0px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 768px) {
  main {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    .intro, .preview {
      min-width: 90vw;
    }
  }
}
.summary {
  background: white;
  border-radius: 0.5rem;
  padding-top: .5rem;
  .header {
    display: flex;
    padding: 0.5rem 1rem;
    font-weight: bold;
    align-items: center;
    .availability {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      font-size: 10px;
      background: lightgreen;
      color: darkgreen;
      border-radius: 1rem;
      padding: 0.25rem 0.5rem;
    }
  }
}

.info {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 0.25rem;
  padding-inline: 1rem;
  .texts {
    display: flex;
    flex-direction: column;
    width: 100%;
    p {
      font-size: 14px;
      color: hsl(0, 0%, 20%);
    }
    .actions {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        display: flex;
        align-items: center;
        font-weight: bold;
        gap: 0.25rem;
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
  }
  .avatar {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: 35%;
    border-radius: 100%;
    border: 4px solid lightgray;
    img {
      width: 100%;
      border-radius: 100%;
      padding: .5rem;
    }
  }
}

  .socials {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: white;
    padding: .5rem 1rem;
    border-radius: .5rem;
    a {
      color: black;
      &:hover {
      color: gray;
    }
    }
  }
</style>
