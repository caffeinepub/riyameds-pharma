import Text "mo:core/Text";

actor {
  type Inquiry = {
    name : Text;
    email : Text;
    phone : Text;
    product : Text;
    message : Text;
  };

  private var inquiries : [Inquiry] = [];

  public func submitInquiry(
    name : Text,
    email : Text,
    phone : Text,
    product : Text,
    message : Text
  ) : async Bool {
    let newInquiry : Inquiry = {
      name = name;
      email = email;
      phone = phone;
      product = product;
      message = message;
    };
    inquiries := Array.tabulate<Inquiry>(inquiries.size() + 1, func(i : Nat) : Inquiry {
      if (i < inquiries.size()) inquiries[i]
      else newInquiry
    });
    true
  };

  public query func getInquiryCount() : async Nat {
    inquiries.size()
  };
}
