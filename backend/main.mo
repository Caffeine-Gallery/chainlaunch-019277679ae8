import Nat "mo:base/Nat";

actor {
  stable var visitorCount : Nat = 0;

  public query func getVisitorCount() : async Nat {
    return visitorCount;
  };

  public func incrementVisitorCount() : async Nat {
    visitorCount += 1;
    return visitorCount;
  };
}
