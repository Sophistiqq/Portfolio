<script lang="ts">
  let { selectProject } = $props();
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
