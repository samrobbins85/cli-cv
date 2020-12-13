const React = require("react");
const { Text, Box } = require("ink");
const BigText = require("ink-big-text");

function Skill(props) {
  return (
    <Box>
      <Box width={25}>
        <Text bold>{props.name}</Text>
      </Box>
      <Text>{props.children}</Text>
    </Box>
  );
}

function Item(props) {
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Box justifyContent="space-between">
        <Text bold>{props.title}</Text>
        <Text italic>{props.date}</Text>
      </Box>
      <Text>{props.children}</Text>
    </Box>
  );
}

function Section(props) {
  return (
    <Box flexDirection="column">
      <BigText text={props.title} font="tiny" />
      {props.children}
    </Box>
  );
}

const CV = () => {
  return (
    <Box
      borderStyle="double"
      margin={2}
      paddingY={1}
      paddingX={4}
      flexDirection="column"
      width="80%"
    >
      <Box justifyContent="center">
        <BigText text="Sam Robbins" font="simple" />
      </Box>
      <Section title="Skills">
        <Skill name="Programming languages">JavaScript, Python, SQL, C</Skill>
        <Skill name="Software + Tools">
          Next.js, Node.js, Electron, Bash, Powershell, Hugo, Git, MongoDB
        </Skill>
        <Skill name="Libraries + Packages">
          Tailwind CSS, React, Bootstrap, UIkit, NumPy, NetworkX
        </Skill>
        <Skill name="Platforms">Arduino, Raspberry Pi, Linux</Skill>
      </Section>
      <Section title="Qualifications">
        <Item title="Computer Science BSc" date="October 2018 - Present">
          Durham University
        </Item>
      </Section>
      <Section title="Experience">
        <Item
          title="Durham University Demonstrator"
          date="October 2020 - Present"
        >
          Taught Software Engineering to second year students. Involves guiding
          them in creating a project for an external client.
        </Item>
        <Item
          title="Global Cyber Alliance Summer Intern"
          date="July 2020 - September 2020"
        >
          Worked on a range of projects, including a tool to compare DNS
          services and a tool to detect the presence of Intel security measures
          on a computer. Also set up DMARC for a range of customers
        </Item>
        <Item title="DurHack Tech Officer" date="February 2020 - November 2020">
          Working with both the tech and logistics of a remote hackathon
        </Item>
        <Item title="Google init.g" date="November 2019">
          Learned about Binary Exploits, Fuzzing, and reverse engineering
          Android apps
        </Item>
        <Item
          title="Web Developer at Physics and Maths Tutor"
          date="October 2019 - January 2020"
        >
          Further developing their WordPress site to include new files and
          change page formatting
        </Item>
      </Section>
      <Section title="Projects">
        <Item title="CV Generator" date="November 2020">
          A full stack application to store and host your CV
        </Item>
        <Item title="init.OSS" date="September 2020 - Present">
          A website to guide people in making their first contributions to open
          source software
        </Item>
        <Item title="Auth0 Hackathon" date="August 2020">
          Built a tool which made it easier to add DMARC email verification to
          your domain on Vercel. This won third prize in the Security category
        </Item>
        <Item title="CS Notes" date="July 2020 - Present">
          Used Markdown and React to create a website to display and organise my
          notes
        </Item>
        <Item title="Same Home Different Hacks" date="June 2020">
          Used pair programming to create a Flutter app which organized
          electronic components and assigned them to projects
        </Item>
        <Item title="Hugo Developer Portfolio" date="December 2019 - Present">
          Created a portfolio website Hugo theme with the UIkit CSS Framework
        </Item>
        <Item
          title="Foodbank stocktake system"
          date="October 2019 - March 2020"
        >
          In a team produced a fullstack website to manage stock for a local
          foodbank. Built with React and Node.js
        </Item>
        <Item title="DurHack 2019" date="November 2019">
          Created a tool to help people with dementia. Personally integrated
          Twilio and the Capital One API. This won best use of MongoDB and we
          were finalists
        </Item>
      </Section>
    </Box>
  );
};

module.exports = CV;
