import iconSet from "./assets/selection.json";
import ParticlesBackground from "./ParticlesBackground";
import CustIcoMoon from "./CustIcoMoon";

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative flex items-center justify-center text-white particles-bg">
      <ParticlesBackground />
      <div class="container mx-auto">
        <div className="text-center">
          <img
            class="relative rounded-full w-48 h-48 mt-[42px] mb-3 mx-auto"
            src="/profile.jpg"
            alt="Profile Image"
          ></img>
          <p class="text-[32px] font-medium tracking-wider">Ryan Andri</p>
          <p class="text-2xl tracking-wide text-gray-400 mt-2 mb-2">
            Rainforce279
          </p>
          <p class="text-xl tracking-wide">Linux and Android Enthusiast</p>
          <p class="text-xl tracking-wide">Graduated Informatics Engineering</p>
          <p class="text-xl tracking-wide">Bina Darma University</p>
          <p class="text-xl tracking-wide">Indonesia - Palembang</p>
        </div>
        <ul class="relative flex items-center justify-center gap-4 mt-4">
          <li>
            <a href="https://github.com/ryan-andri" target="_blank">
              <CustIcoMoon iconName="github" color="white" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ryanandri.rf" target="_blank">
              <CustIcoMoon iconName="instagram" color="white" />
            </a>
          </li>
          <li>
            <a
              class="text-2xl font-bold"
              href="https://forum.xda-developers.com/member.php?u=5250109"
              target="_blank"
            >
              XDA
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/ryanandri07" target="_blank">
              <CustIcoMoon iconName="facebook2" color="white" />
            </a>
          </li>
          <li>
            <a href="mailto:ryan-andri@outlook.com" target="_blank">
              <CustIcoMoon iconName="mail4" color="white" />
            </a>
          </li>
        </ul>
        <div class="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-2">
          <p>&copy; Ryan Andri {currentYear}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
