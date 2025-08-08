export const About=()=>{

    const frontendSkills = [
        "Flutter",
        "React",
        "TailwindCSS"
    ]

     const backendSkills = [
        "Springboot",
        "PostgresSQL",
    ]

    return (<section id="about"
    className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">
                {" "}
                About Me</h2>

                <div className="rounded-xl p-8 border-white/70 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia rerum nulla laborum deserunt vel accusantium cum quibusdam, dolor cumque?
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech,key)=>(
                                      <span 
                                      key={key}
                                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition 
                                      ">
                                        {tech}
                                      </span>
                                ))}
                            </div>
                        </div>

                           <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech,key)=>(
                                      <span 
                                      key={key}
                                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition 
                                      ">
                                        {tech}
                                      </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>B.Tech in Information Technology</strong> - SATI (2022-2026)
                        </li>
                         <li>
                            <strong>Relevant course work</strong> - SATI (2022-2026)
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4>Backend Internship</h4>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}