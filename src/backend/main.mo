import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Migration "migration";

(with migration = Migration.run)
actor {
  type Inquiry = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let inquiries = List.empty<Inquiry>();

  public shared ({ caller }) func submitInquiry(
    name : Text,
    email : Text,
    phone : Text,
    message : Text,
  ) : async () {
    if (name.size() == 0 or email.size() == 0) {
      Runtime.trap("Name and email are required");
    };

    let newInquiry : Inquiry = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    inquiries.add(newInquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.toArray();
  };

  public query ({ caller }) func getInquiryCount() : async Nat {
    inquiries.size();
  };
};
