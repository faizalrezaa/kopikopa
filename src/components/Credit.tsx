const Credit = () => {
  return (
    <section
      id="credits"
      className="flex flex-col justify-center items-center w-full h-80 bg-primary"
    >
      <div className="font-poppins-md">Credits</div>
      <div>
        <ul className="list-disc list-inside">
          <li>
            <a
              target="_blank"
              href="https://icons8.com/icon/CU7uQBPFjlhJ/coffee-beans"
            >
              Coffee Beans
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/gngDuTzfFwJS/v60">
              V60
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/37211/cafe">
              Coffee Cup
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Credit;
