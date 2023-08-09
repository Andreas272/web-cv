import { TextSection} from '../components/TextSection';

/**
 * @returns JSX code describing the home page of the web cv
 */
export function Home({themeColor}){
    return (
      <>
      <TextSection color={themeColor} title="Hi, I am Andreas" text={intro}/>
      <TextSection color={themeColor}  title="Programming projects" text={projects}/>
      <TextSection color={themeColor} title="Teaching" text={teaching}/>
      </>
    )
  }
  
  // Content
let intro=`Welcome to my web page. I am 30 years old and study Software at AAU. 
My first educationen has resultet in four wonderfull years as a physics and maths teacher in the gymnasium. However, I chose to take a break from working and seek out
an enviroenment where I could strengthen my knowledge of the huge IT technology complex which is impacting the world so much.`

let projects=`So far, I have worked on two semester projects during my Software degree. The first is a program
written in C, where my project group and I made a program which could read a file containing travel times and stations in a train network and find all pairs shortest paths.
The second project, Gridflix, was a proof of concept for a grid computing system which uses a host website such as Netflix to recruit workers. 
Since existing application based based grid computing platforms such as BOINC has seen a decrease in participating workers, we suggest this browser based grid computing system 
which also includes paying the workers with a subscription discount to motivate participation.`

let teaching=`So far, I have worked on two semester projects during my Software degree. The first is a program
written in C, where my project group and I made a program which could read a file containing travel times and stations in a train network and find all pairs shortest paths.
The second project, Gridflix, was a proof of concept for a grid computing system which uses a host website such as Netflix to recruit workers. 
Since existing application based based grid computing platforms such as BOINC has seen a decrease in participating workers, we suggest this browser based grid computing system 
which also includes paying the workers with a subscription discount to motivate participation.
So far, I have worked on two semester projects during my Software degree. The first is a program
written in C, where my project group and I made a program which could read a file containing travel times and stations in a train network and find all pairs shortest paths.
The second project, Gridflix, was a proof of concept for a grid computing system which uses a host website such as Netflix to recruit workers. 
Since existing application based based grid computing platforms such as BOINC has seen a decrease in participating workers, we suggest this browser based grid computing system 
which also includes paying the workers with a subscription discount to motivate participation.
So far, I have worked on two semester projects during my Software degree. The first is a program
written in C, where my project group and I made a program which could read a file containing travel times and stations in a train network and find all pairs shortest paths.
The second project, Gridflix, was a proof of concept for a grid computing system which uses a host website such as Netflix to recruit workers. 
Since existing application based based grid computing platforms such as BOINC has seen a decrease in participating workers, we suggest this browser based grid computing system 
which also includes paying the workers with a subscription discount to motivate participation.
So far, I have worked on two semester projects during my Software degree. The first is a program
written in C, where my project group and I made a program which could read a file containing travel times and stations in a train network and find all pairs shortest paths.
The second project, Gridflix, was a proof of concept for a grid computing system which uses a host website such as Netflix to recruit workers. 
Since existing application based based grid computing platforms such as BOINC has seen a decrease in participating workers, we suggest this browser based grid computing system 
which also includes paying the workers with a subscription discount to motivate participation.
So far, I have worked on two semester projects during my Software degree. The first is a program
written in C, where my project group and I made a program which could read a file containing travel times and stations in a train network and find all pairs shortest paths.
The second project, Gridflix, was a proof of concept for a grid computing system which uses a host website such as Netflix to recruit workers. 
Since existing application based based grid computing platforms such as BOINC has seen a decrease in participating workers, we suggest this browser based grid computing system 
which also includes paying the workers with a subscription discount to motivate participation.
So far, I have worked on two semester projects during my Software degree. The first is a program
written in C, where my project group and I made a program which could read a file containing travel times and stations in a train network and find all pairs shortest paths.
The second project, Gridflix, was a proof of concept for a grid computing system which uses a host website such as Netflix to recruit workers. 
Since existing application based based grid computing platforms such as BOINC has seen a decrease in participating workers, we suggest this browser based grid computing system 
which also includes paying the workers with a subscription discount to motivate participation.
So far, I have worked on two semester projects during my Software degree. The first is a program
written in C, where my project group and I made a program which could read a file containing travel times and stations in a train network and find all pairs shortest paths.
The second project, Gridflix, was a proof of concept for a grid computing system which uses a host website such as Netflix to recruit workers. 
Since existing application based based grid computing platforms such as BOINC has seen a decrease in participating workers, we suggest this browser based grid computing system 
which also includes paying the workers with a subscription discount to motivate participation.  `