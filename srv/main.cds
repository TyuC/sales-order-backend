using { sales } from '../db/schema';

//@requires: ['admin', 'read_only_user']
@requires: 'authenticated-user'
/*    @restrict: [
        {
            grant: 'READ',
            to: 'read_only_user'
        },
        {
            grant: ['READ', 'WRITE'],
            to: 'admin'
        }
    ]*/
service MainService {
    //@requires: ['read_only_user']
    entity SalesOrderHeaders as projection on sales.SalesOrderHeaders;
    //@requires: ['admin', 'read_only_user']
    entity Customers as projection on sales.Customers;
    //@requires: ['admin']
    entity Products as projection on sales.Products;

}