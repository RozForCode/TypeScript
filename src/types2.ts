// we can control which types we want to include or exclude in the new type
// partial record type
// type ContactQuery = Partial<Record<keyof Contact,Query>>// makes all properties optional ?
// to avoid certian types - Omit
// type ContactQuery = Omit<Partial<Record<keyof Contact,Query>>,"address"|"status">// second generic parameter that you would like to omit
// result of this is that all id are optional but address and status cannot be added

// how to make it so certain properties have to be added - pick
// type ContactQuery = <Partial<Pick<Record<keyof Contact,Query>,"id","name">>
// still optional
// Required type
// type RequiredContactQuery = Required<ContactQuery>


// extracting meta data from existing types

/**
 * type conQue = {
 * [TProp in keyof Contact]?:Query
 * }
 *///index accessor type



/**
 * function query<T>(
    items:T[],
    query: {
        [Tprop keyof T: (val:T[Tprop])=> boolean
        }){//function code}
   (val:T[Tprop])=> boolean is type annotation for a function
   // this entire expression represents a function type that takes a value (val) of type T[Tprop] and returns boolean value
 */