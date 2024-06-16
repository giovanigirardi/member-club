type User = {
  id: string;
  name: string;
  profilePicture: string;
  clientSince: string;
  loyaltyCard: LoyaltyCard;
  appointmentHistory: appointment[];
};

type LoyaltyCard = {
  cutsNeeded: number;
  cutsRemaining: number;
  totalCuts: number;
};

type appointment = {
  date: string;
  time: string;
};
