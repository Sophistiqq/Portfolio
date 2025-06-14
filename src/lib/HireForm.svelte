<script>
import { Dot } from "lucide-svelte";
import { slide } from "svelte/transition";
</script>
<div class="container" in:slide>
  <div class="header">
    <span>Hire me</span>
    <Dot color="gray" size="24" />
  </div>

  <form class="design-inquiry">
    <h2>Design Inquiry</h2>
    <p>Got an idea and need design help? Reach out now.</p>
    <div class="inputs">
      <input type="text" id="name" name="name" placeholder="Name">
      <input type="email" name="email" id="email" placeholder="Email">
      <textarea name="message" id="message" placeholder="Message"></textarea>
    </div>
    <button type="submit">Submit Inquiry</button>
  </form>
</div>
<style>
  .container {
    padding: 1rem;
  }  

  .header {
    display: flex;
    font-weight: bold;
    align-items: center;
    margin-bottom: 1rem;
  }

  form {
    p {
      font-size: 14px;
    }

    button {
      background-color: black;
      color: white;
      width: 100%;
      padding: .5rem;
      border: none;
      margin-top: 1rem;
      border-radius: .5rem;
      font-size: 90%;
      transition: background .5s ease;
      cursor: pointer;
      &:hover {
        background: hsl(0, 0%, 20%);
      }
    }

    .inputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: .5rem;
      margin-top: 1rem;
      textarea {
        grid-column: span 2;
      }

      & > * {
        border: none;
        padding: 1rem;
        border-radius: .5rem;
        background-color: hsl(0, 0%, 92.5%);
        outline: none;
        border: 1px solid transparent;
        transition: border .5s ease;
        font-size: 80%;
        &:focus {
          border: 1px solid black;
        }
      }
    }
  }
</style>
