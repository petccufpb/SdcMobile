import React from "react";

import ScheduleCard from "../../components/ScheduleCard";
import ScheduleHeader from "../../components/ScheduleHeader";
import ScheduleContent from "../../components/ScheduleContent";
import ScheduleItem from "../../components/ScheduleItem";

export default props => {
  return (
    <ScheduleCard>
      <ScheduleHeader 
        iconName="modern-mic" 
        title="Dia de Palestras"
        subtitle="Segunda-feira 05/02"
      />
      <ScheduleContent>        
        <ScheduleItem iconName="modern-mic" title="Palestra 2" date="08h45" />
        <ScheduleItem iconName="modern-mic" title="Palestra 3" date="09h30" />
        <ScheduleItem iconName="cup" title="Coffee Break" date="09h30" />
        <ScheduleItem iconName="modern-mic" title="Palestra 4" date="08h" />
        <ScheduleItem iconName="modern-mic" title="Palestra 5" date="08h45" />
        <ScheduleItem iconName="modern-mic" title="Palestra 6" date="09h30" />
      </ScheduleContent>
    </ScheduleCard>
  );
}