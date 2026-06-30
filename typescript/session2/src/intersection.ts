type Identifiable = { readonly id: string };
type Timestamped = { createdAt: Date; updatedAt: Date };
type SoftDeletable = { deletedAt?: Date; isDeleted: boolean };
type BaseRecord = Identifiable & Timestamped;
type UserRecord = BaseRecord & { name: string; email: string };
type AuditedUserRecord = UserRecord & SoftDeletable;
function isDeleted(record: SoftDeletable): boolean {
  return record.isDeleted;
}
type A = { value: string };
type B = { value: number };
type C = A & B;
