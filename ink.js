const React = require("react");
const { Text, Box } = require("ink");
const BigText = require("ink-big-text");
const config = require("./config.json");
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
    >
      <Box justifyContent="center">
        {process.stdout.columns > 100 ? (
          <BigText text={config.name} font="simple" />
        ) : (
          <BigText text={config.name} font="tiny" />
        )}
      </Box>
      {config.skills ? (
        <Section title="Skills">
          {Object.keys(config.skills).map((title) => (
            <Skill name={title}>{config.skills[title].join(", ")}</Skill>
          ))}
        </Section>
      ) : undefined}
      {config.qualifications ? (
        <Section title="Qualifications">
          {config.qualifications.map((item) => (
            <Item title={item.title} date={item.date}>
              {item.description}
            </Item>
          ))}
        </Section>
      ) : undefined}

      {config.experience ? (
        <Section title="Experience">
          {config.experience.map((item) => (
            <Item title={item.title} date={item.date}>
              {item.description}
            </Item>
          ))}
        </Section>
      ) : undefined}
      {config.projects ? (
        <Section title="Projects">
          {config.projects.map((item) => (
            <Item title={item.title} date={item.date}>
              {item.description}
            </Item>
          ))}
        </Section>
      ) : undefined}
    </Box>
  );
};

module.exports = CV;
