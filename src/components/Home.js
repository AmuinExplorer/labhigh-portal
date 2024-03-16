function Home() {
    return (
      <div className="h-screen flex flex-col">
        <div className="bottom-0 p-3 sticky top-0 bg-white">
            <a href="/register"><p className=" font-extrabold text-green-900">REGISTER NOW!</p></a>
        </div>
        <div className="flex items-center p-10 justify-center text-white" style={{ backgroundImage: "url(https://www.minsu.edu.ph/template/images/about-bg.jpg)" }}>
          <div className="">
            {/* MinSU Logo */}
            <img src="https://www.minsu.edu.ph/template/images/logo.png" alt="MinSU logo" width={150} className="mx-5"></img>
          </div>
          <div className="">
            <p className="text-3xl font-bold leading-8">Mindoro State University</p>
            <p className="text-xl font-normal leading-6">Laboratory High School Department</p>
            <p className="text-base font-light leading-6">Masipit, Calapan City, Oriental Mindoro</p>
          </div>
        </div>
  
        <div className="flex-1 items-center justify-center">
          <div className="flex flex-row">
            <div className="flex-1 p-10">
              <h1 className=" font-extrabold text-2xl text-left text-green-600">
                "Empower Your Future: Enroll Today and Unleash Your Potential at Mindoro State University's Laboratory High School"
              </h1>
              <br />
              <p className=" text-justify indent-10">
              Choosing to enroll in Mindoro State University's Laboratory High School department is a decision that lays the foundation for a future brimming with academic prowess, personal development, and boundless opportunities. Our Laboratory High School department stands as a beacon of educational excellence, providing students with a nurturing environment where they can thrive academically and grow holistically.
              <br />
              <br />
              <p>At Mindoro State University's Laboratory High School department, we are dedicated to providing a comprehensive and well-rounded education that prepares students for the challenges and opportunities of the modern world. With a team of dedicated educators who are passionate about nurturing young minds, we ensure that every student receives individualized attention and support to reach their full potential.</p>
              <br />
              <br />
              <p>Our curriculum is designed to foster critical thinking, creativity, and innovation, equipping students with the skills and knowledge they need to excel in their academic pursuits and beyond. From rigorous academic programs to enriching extracurricular activities, we offer a diverse range of opportunities for students to explore their interests, develop their talents, and cultivate a lifelong love for learning.</p>
              <br />
              <br />
              <p>Moreover, our Laboratory High School department provides state-of-the-art facilities and resources that enhance the learning experience and enable students to engage in hands-on, experiential learning opportunities. Whether it's conducting science experiments in our well-equipped laboratories, participating in cultural events and competitions, or engaging in community service projects, students at Mindoro State University's Laboratory High School department are empowered to discover their passions and make a positive impact on the world.</p>
              <br />
              <br />
              <p>But beyond academics, our Laboratory High School department is committed to nurturing the holistic development of students, instilling in them values of integrity, leadership, and social responsibility. We believe in fostering a supportive and inclusive community where every student feels valued, respected, and empowered to realize their dreams.</p>
              <br />
              <br />
              <p className=" indent-10">By choosing to enroll in Mindoro State University's Laboratory High School department, you are investing in a transformative educational experience that will shape the trajectory of your future. Join us on this exciting journey of discovery, growth, and limitless possibilities. Your path to success starts here.</p>
              </p>
            </div>
            <div className="flex-1 p-10">
              <div>
                <p className=" font-extrabold text-2xl text-left text-green-600">
                  Laboratory High School Department
                </p>
                <br />
                <p className=" indent-10">
                  MinSCAT maintains Laboratory High School that serves as training ground for the student teachers. The Secondary Department adopts the Basic Education Curriculum (BEC)
                </p>
              </div>
              <div>
                <br />
                <p className=" font-bold text-2xl text-green-600">
                  Requirements for Grade 7 Only
                </p>
                <div className=" text-green-500 bg-green-50 rounded-lg p-3">
                  <p>Entrance Examination</p>
                  <p>Physical and Medical Exams (School Clinic)</p>
                  <p>Photocopy of Elementary Report Card (Form 138)</p>
                  <p>Four(4) pieces 1" x 1" recent color photo(white background)</p>
                  <p>Two(2) pieces of 2" x 2" recent color picture(white background)</p>
                  <p>Photocopy of Good Moral</p>
                  <p>Photocopy of PSA</p>
                  <p className=" font-extrabold">Grade Requirements</p>
                  <p>Aspiring Laboratory High School student must have an average grade of atleast <strong>85</strong> in the following subjects:</p>
                  <p>*English</p>
                  <p>*Mathematics</p>
                  <p>*Science</p>
                  <p>*Araling Panlipunan</p>
                  <p>*Filipino</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-2 p-5 flex" style={{ backgroundImage: "url(https://www.minsu.edu.ph/template/images/chart_bg.jpg)" }}>
          <div className="flex items-center align-middle">
            <img src="https://www.minsu.edu.ph/template/images/logo.png" wi alt="MinSU logo" width={100} className="mx-5" />
          </div>
          <div className="text-white flex flex-row align-middle justify-center items-center">
            <div>
              <p className=" text-2xl font-semibold">Contact us</p>
              <p className="font-light">Address: Alcate, Victoria Oriental Mindoro</p>
            </div>
            <div className="p-2">
              <a href="https://www.facebook.com/minsuofficialpage"><img src="fb-icon.png" width={48} alt="facebook icon"/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  