import { FaDiscord, FaGithub } from "react-icons/fa";
import { Logo } from "./Logo";

export default function FooterSite() {
  return (
    <div className="flex-col flex">
      <div className="border-t">
        <div className="flex flex-col gap-4 md:flex-row h-16 items-center px-4 py-16">
          <nav className="flex items-center space-x-4 mx-6 flex items-center space-x-4 lg:space-x-6">
            <a
              href="https://discord.gg/yvYXhGj"
              target="_blank"
              rel="nofollow noreferer noopener"
            >
              <FaDiscord className="w-6 h-6 text-sm font-medium text-muted-foreground transition-colors hover:text-yellow-400" />
            </a>
            <a
              href="https://github.com/filipeleonelbatista/devchallenge-v2"
              target="_blank"
              rel="nofollow noreferer noopener"
            >
              <FaGithub className="w-6 h-6 text-sm font-medium text-muted-foreground transition-colors hover:text-yellow-400" />
            </a>
          </nav>

          <div className="flex-1 text-center items-center justify-center">
            <p>Desenvolvido com 💛 pela comunidade!</p>
            <p>Direitos reservados &copy; {new Date().getFullYear()}</p>
          </div>
          <div className="ml-0 pb-4 md:pb-0 md:ml-auto mr-6">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
}
