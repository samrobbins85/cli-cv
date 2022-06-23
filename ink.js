const React = require("react");
const { Text, Box } = require("ink");
const BigText = require("ink-big-text");
const { useEffect, useState } = require("react");
const fetch = require("node-fetch");
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
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/samrobbins85/resume/main/data.json"
    )
      .then((response) => response.json())
      .then((info) => {
        setData(info);
      });
  }, []);
  if (!data) {
    return <Text>{" Loading"}</Text>;
  }
  return (
    <Box
      borderStyle="double"
      margin={2}
      paddingY={1}
      paddingX={4}
      flexDirection="column"
    >
      <Box justifyContent="center">
        {process.stdout.columns > 100 ? (
          <BigText text={data.name} font="simple" />
        ) : (
          <BigText text={data.name} font="tiny" />
        )}
      </Box>
      {data.languages || data.librariesAndFrameworks || data.software ? (
        <Section title="Skills">
          {data.languages && (
            <Skill name="Languages">{data.languages.join(", ")}</Skill>
          )}
          {data.librariesAndFrameworks && (
            <Skill name="Languages">
              {data.librariesAndFrameworks.join(", ")}
            </Skill>
          )}
          {data.software && (
            <Skill name="Software">{data.software.join(", ")}</Skill>
          )}
        </Section>
      ) : undefined}
      {data.education ? (
        <Section title="Qualifications">
          {data.education.map((item) => (
            <Item
              title={`${item.qualification} - ${item.institution}`}
              date={item.duration}
            >
              {item.description}
            </Item>
          ))}
        </Section>
      ) : undefined}

      {data.experience ? (
        <Section title="Experience">
          {data.experience.map((item) => (
            <Item title={`${item.role} - ${item.company}`} date={item.duration}>
              {item.description}
            </Item>
          ))}
        </Section>
      ) : undefined}
      {data.project ? (
        <Section title="Projects">
          {data.project.map((item) => (
            <Item title={item.name} date={item.date}>
              {item.description}
            </Item>
          ))}
        </Section>
      ) : undefined}
    </Box>
  );
};

module.exports = CV;
