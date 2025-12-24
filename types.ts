
export interface GuideCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  links?: { title: string; uri: string }[];
  isStreaming?: boolean;
}

export interface GovForm {
  id: string;
  title: string;
  department: string;
  url: string;
  category: string;
}

export interface UserChecklist {
  id: string;
  title: string;
  items: { id: string; text: string; completed: boolean }[];
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}
