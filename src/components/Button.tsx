const Button = () => {
  return (
    <button
      className="p-2 bg-blue-500 mx-auto text-white font-medium hover:bg-blue-600 rounded-xl"
      onClick={() => console.log("hello i am clicked")}
    >
      you have to do it
    </button>
  );
};

export { Button };
