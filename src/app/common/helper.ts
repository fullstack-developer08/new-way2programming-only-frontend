export class Helper {
  isHostLocal() {
    let hostname = window.location.hostname;
    if (hostname === "localhost") return true;
    return false;
  }
}
