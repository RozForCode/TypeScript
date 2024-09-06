type ContactStatus1 = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contactx {
    id: number;
    name: string;
    status: ContactStatus1;
    address: Address;
}

type Awesome = Contactx["address"]["postalCode"]

interface ContactEvent {
    contactId: Contactx["id"];
}

interface ContactDeletedEvent extends ContactEvent {
}

interface ContactStatusChangedEvent extends ContactEvent {
    oldStatus: Contactx["status"];
    newStatus: Contactx["status"];
}

interface ContactEvents {
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent;
    // ... and so on
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}

function handleEvent<T extends keyof ContactEvents>(
    eventName: T,
    handler: (evt: ContactEvents[T]) => void
) {
    if (eventName === "statusChanged") {
        handler({ contactId: 1, oldStatus: "active", newStatus: "inactive" })
    }
}

handleEvent("statusChanged", evt => evt)