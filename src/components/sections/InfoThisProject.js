import "./InfoProject.css";

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns JSX code describing a text section
 */
export default function InfoThisProject({ color }) {
    return (
        <div className="project-info-container">
            <div className="intro" style={{ backgroundColor: color }}>
                <h1>This website as a project</h1>
                <p>
                    This is my first larger personal programming project. 
                    I have chosen this web cv
                    as my first project since I want to make even more personal projects in the future, and I love to share my work.
                    Thus, the main goal of this project is to build a plaform where I can share my work, but also to
                    have a personal platform on the Web where individuals who do not know me can learn a little bit about me. 
                    However, it is also the
                    first website that I make entirely by myself. Therefore it has the added
                    benefit, that I learn skills and concepts within front-end web development that are new to me. This
                    includes
                </p>
                <p style={{ paddingLeft: "15px", marginTop: "-7px" }}>
                    <lu>
                        <li>Layout with CSS</li>
                        <li>How to use React</li>
                    </lu>
                </p>
                <p>
                    React components are used to build the website, and CSS grid is used to control
                    the layout. The source code of this web-site can be found on my{" "}
                    <a href="https://github.com/Andreas272/web-cv">Github</a>.
                </p>
            </div>
        </div>
    );
}
