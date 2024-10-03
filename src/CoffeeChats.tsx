// CoffeeChats.tsx
function CoffeeChats() {
  return (
    <div>
      <h2>Professional Coffee Chats</h2>
      <p>Need some advice or just want to chat about your career or studies? We're here to help!</p>

      <div className="profiles">
        <div className="profile">
          <img src="/path/to/your-photo.jpg" alt="Your Name" />
          <h3>Your Name</h3>
          <p>
            I’m a fourth-year astrophysics and computer science student. I can assist with most 1st and 2nd year
            physics, math, and CS classes, as well as provide general advice for your academic journey.
          </p>
        </div>

        <div className="profile">
          <img src="/path/to/friends-photo.jpg" alt="Friend's Name" />
          <h3>Friend's Name</h3>
          <p>
            I'm a fourth-year computer science and business student. I can provide career advice, help with business-related
            inquiries, and assist with making connections in the industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoffeeChats;
