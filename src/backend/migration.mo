import List "mo:core/List";
import Time "mo:core/Time";

module {
  type OldInquiry = {
    name : Text;
    email : Text;
    phone : Text;
    product : Text;
    message : Text;
  };

  type OldActor = {
    inquiries : [OldInquiry];
  };

  type NewInquiry = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type NewActor = {
    inquiries : List.List<NewInquiry>;
  };

  public func run(old : OldActor) : NewActor {
    let newInquiries = List.fromArray<NewInquiry>(
      old.inquiries.map<OldInquiry, NewInquiry>(
        func(oldInquiry) {
          {
            name = oldInquiry.name;
            email = oldInquiry.email;
            phone = oldInquiry.phone;
            message = oldInquiry.message;
            timestamp = 0;
          };
        }
      )
    );
    { inquiries = newInquiries };
  };
};
