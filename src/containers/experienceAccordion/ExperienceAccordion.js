import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import { Accordion, Panel } from "baseui/accordion";
import styles from "./ExperienceAccordion.module.css";

const ExperienceAccordion = (props) => {
  const theme = props.theme;

  return (
    <div className={styles["experience-accord"]}>
      <Accordion>
        {props.sections.map((section) => {
          return (
            <Panel
              expanded={true}
              className={styles["accord-panel"]}
              title={section["title"]}
              key={section["title"]}
              overrides={{
                Header: {
                  style: () => ({
                    backgroundColor: `${theme.body}`,
                    border: `1px solid`,
                    borderRadius: `5px`,
                    borderColor: `${theme.headerColor}`,
                    marginBottom: `3px`,
                    fontFamily: "Google Sans Regular",
                    color: `${theme.text}`,
                    ":hover": {
                      color: `${theme.secondaryText}`,
                    },
                  }),
                },
                Content: {
                  style: () => ({
                    backgroundColor: `${theme.body}`,
                  }),
                },
              }}
            >
              {section["experiences"].map((experience, index) => {
                return (
                  <ExperienceCard
                    index={index}
                    totalCards={section["experiences"].length}
                    experience={experience}
                    theme={theme}
                  />
                );
              })}
            </Panel>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ExperienceAccordion;
