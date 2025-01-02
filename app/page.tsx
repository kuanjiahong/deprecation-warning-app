/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <p>Click the button to go to /some-rewrite-url</p>
      <p>The app will rewrite the url to /url-written</p>
      <button>
        <a href="/some-rewrite-url">Click me to trigger the rewrite feature</a>
      </button>
    </div>
  );
}
