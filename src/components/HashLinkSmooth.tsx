import { HashLink } from "react-router-hash-link";
interface HLSPros {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const HashLinkSmooth = ({ to, className, children }: HLSPros) => {
  return (
    <HashLink smooth to={to} className={className}>
      {children}
    </HashLink>
  );
};

export default HashLinkSmooth;
