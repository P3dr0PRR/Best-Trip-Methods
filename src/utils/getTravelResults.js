export const getTravelResult = ({ car, airplane, boat, train }) => {
  if (airplane > car && airplane > boat && airplane > train) {
    return "airplane";
  }
  if (boat > car && boat > airplane && boat > train) {
    return "boat";
  }
  if (train > car && train > airplane && train > boat) {
    return "train";
  }
  return "car";
};
