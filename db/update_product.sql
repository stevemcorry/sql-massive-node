UPDATE products
SET Description = $2
WHERE id = $1
RETURNING *;
