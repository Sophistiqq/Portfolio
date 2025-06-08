<script lang="ts">
  import Nav from "../lib/Nav.svelte";
  import Preview from "../lib/Preview.svelte";
  import Projects from "../lib/Projects.svelte";
  import avatar from "../assets/Avatar.jpg";
  import { Github, Send, Dot } from "lucide-svelte";

  type Project = "CDCS" | "iTrack" | "JobTrackR";
  let selected: Project = $state("CDCS");
  function selectProject(project: Project) {
    selected = project;
  }
</script>

<main>
  <div class="intro">
    <Nav />
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
        <Projects />
      </div>
    </div>
  </div>

  <div class="preview">
    <Preview {selectProject} />
    {selected}
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-height: 100svh;
    padding: 1rem;
    gap: 1rem;
  }
  .intro {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 500px;
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
    height: 100%;
    min-width: 500px;
    width: 40vw;
    max-width: 45vw;
    background: white;
  }

  @media screen and (max-width: 768px) {
    main {
      flex-direction: column;
      overflow-y: scroll;
    }
  }
  .summary {
    background: white;
    border-radius: 0.5rem;
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
      padding: 0.25rem;
      img {
        width: 100%;
        border-radius: 100%;
      }
    }
  }
</style>
