import AddRecipeForm from "./AddRecipeForm";

const DisplayAddRecipeSection = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlY2lwZSUyMGJvb2t8ZW58MHx8MHx8fDA%3D)`,
          transform: "scaleX(-1)",
        }}>
        <div style={{ transform: "scaleX(-1)" }}>
          <AddRecipeForm />
        </div>
      </div>
    </>
  );
};

export default DisplayAddRecipeSection;
