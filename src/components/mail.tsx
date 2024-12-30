"use client"; // This marks the component as a Client Component
import Spline from '@splinetool/react-spline';

const Mail = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    const email = (e.target as HTMLFormElement).email.value; // Get the email value

    if (!email) {
      alert("Please enter your email address."); // Alert if email is empty
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address."); // Basic email format validation
    } else {
      try {
        const response = await fetch('/api/save-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          alert(`Thank you for signing up with ${email}!`);
          (e.target as HTMLFormElement).reset(); // Reset the form
        } else {
          alert('Failed to save email. Please try again.');
        }
      } catch (error) {
        console.error('Error saving email:', error);
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <section
      className="relative flex justify-center text-white h-screen"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spline 
        scene="https://prod.spline.design/akwOLtnlGWOvs9XB/scene.splinecode"
        className="absolute inset-0 w-full h-full"
      />

      <div className="container mx-auto px-4 max-w-xl bg-black bg-opacity-0 p-8 rounded-md relative z-10">
        <h1 className="text-3xl text-white mb-6 text-center">
          JOIN OUR MAILING LIST FOR THE LATEST BEATS
        </h1>
        <form onSubmit={handleSubmit} className="flex items-center justify-center">
          <input
            type="email"
            name="email"
            className="px-4 py-2 mr-4 text-gray-300 placeholder-gray-500 focus:outline-none"
            placeholder="Enter your email"
            style={{
              backgroundColor: "black", // Maintain black background
              color: "white", // White text color
              marginRight: "0",
            }}
            required
          />
          <button 
            type="submit" 
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4"
            style={{
              backgroundColor: "#651fff",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#6200ea")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#651fff")}
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Mail;
