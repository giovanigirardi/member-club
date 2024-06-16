import { renderProfile } from "./profile-render";
import { renderChecking } from "./checking-render";
import { renderProgress } from "./progress-render";
import { renderHistory } from "./history-render";

export function pageLoad(user: User) {
  renderProfile(user);
  renderChecking(user);
  renderProgress(user);
  renderHistory(user);
}
