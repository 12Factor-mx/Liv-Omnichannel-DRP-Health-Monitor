
create (drpMonitor:DRPeCommerceLiverpool id:{'1'})

create 


//Let's create the top of the tree, the PRODUCT
//create (n1:PRODUCT {id:1});

//Let's create 100 children of the PRODUCT, COST_GROUPS connected to the top of the tree
//match (n1:PRODUCT {id:1})
//with range(1,100) as RANGE, n1
//foreach (r in RANGE | create (n2:COST_GROUP {id:r})-[:PART_OF {quantity:round(rand()*100)}]->(n1) );

