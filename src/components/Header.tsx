import { Avatar } from "./Avatar";

const Header = () => {
  return (
    <header className="flex items-center gap-4">
      <Avatar />
      <div>
        <h1 className="text-base">Faisal M.</h1>
        <p className="text-muted-foreground">Learner</p>
      </div>
    </header>
  );
};

export { Header };
