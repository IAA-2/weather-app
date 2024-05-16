import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
} from 'react-accessible-accordion';

const Forecast = ({ data }) => {
  return (
    <>
      <label className="">Daily </label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItemHeading></AccordionItemHeading>
        ))}
        <AccordionItem></AccordionItem>
      </Accordion>
    </>
  );
};

export default Forecast;
