import Container from "../../shared/Container";


const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between">
            <img className="w-20" src="/public/ghuddy.jpg" alt="" />
            <p>Hello</p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar