export class  Util {
  public static generateArray(obj) {
    return Object.keys(obj).map((key) => { return obj[key] });
  }
}
