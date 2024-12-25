import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYelp,
  FaExternalLinkAlt,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <section
      className="pb-16 md:py-16 bg-accent dark:bg-slate-950 dark:bg-sectext-secondary"
      style={{ fontFamily: "var(--font-forum)" }}
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl lg:text-5xl font-semibold text-secondary dark:text-white mb-8">
          Connect with Us
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brownstoner */}
          <Link
            href="https://www.brownstoner.com/services/general-contractor-nyc/d6761b28e9652d/infinity-construction-nyc/"
            passHref
            target="_blank"
          >
            <div
              className="flex flex-col items-center text-secondary dark:text-white dark:hover:text-secondary hover:text-blue-500 transition-colors duration-300"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="text-4xl sm:text-5xl mb-2" />
              <span className="text-sm sm:text-base font-medium">
                Brownstoner
              </span>
            </div>
          </Link>

          {/* Yelp */}
          <Link
            href="https://m.yelp.com/biz/infinity-construction-nyc-brooklyn"
            passHref
            target="_blank"
          > 
            <div
              className="flex flex-col items-center text-secondary dark:text-white dark:hover:text-secondary hover:text-primary transition-colors duration-300"
              rel="noopener noreferrer"
            >
              <FaYelp className="text-4xl sm:text-5xl mb-2" />
              <span className="text-sm sm:text-base font-medium">Yelp</span>
            </div>
          </Link>

          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/404/" passHref target="_blank">
            <div
              className="flex flex-col items-center text-secondary dark:text-white dark:hover:text-secondary hover:text-primary transition-colors duration-300"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-4xl sm:text-5xl mb-2" />
              <span className="text-sm sm:text-base font-medium">LinkedIn</span>
            </div>
          </Link>

          {/* Facebook */}
          <Link
            href="https://www.facebook.com/InfinityConstructionNYC"
            passHref
            target="_blank"
          >
            <div
              className="flex flex-col items-center text-secondary dark:text-white dark:hover:text-secondary hover:text-primary transition-colors duration-300"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-4xl sm:text-5xl mb-2" />
              <span className="text-sm sm:text-base font-medium">Facebook</span>
            </div>
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/infinity_construction_nyc/"
            passHref
            target="_blank"
          >
            <div
              className="flex flex-col items-center text-secondary dark:text-white dark:hover:text-secondary hover:text-primary transition-colors duration-300"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-4xl sm:text-5xl mb-2" />
              <span className="text-sm sm:text-base font-medium">
                Instagram
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
