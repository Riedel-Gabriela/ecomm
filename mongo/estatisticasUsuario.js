use("ecomm-order");

const result = db.orders.aggregate(
    [
        {
            $match: {
                "account.nome": "Ada Lovelace"
            }
        },
        {
            $unwind: "$itens"
        },
        {
            $addFields: {
                total: {
                    $multiply: ["$itens.quantidade", "$itens.precoUnitario"]
                },
                totalDesconto: {
                    $multiply: ["$itens.quantidade", "$itens.desconto"]
                }
            }
        },
        {
            $group: {
                _id: "$_id",
                itens: {
                    $push: "$itens.quantidade"
                },
                total: {
                    $push: "$total"
                },
                totalDesconto: {
                    $push: "$totalDesconto"
                }
            }
        },
        {
            $project: {
                itens: {
                    $sum: "$itens"
                },
                total: {
                    $sum: "$total"
                },
                totalDesconto: {
                    $sum: "$totalDesconto"
                }
            }
        }
    ]
);

console.log(result);