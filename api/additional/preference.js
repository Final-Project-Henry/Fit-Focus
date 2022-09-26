module.exports={
    get_preference: (name, email, id)=>{
        return {
            binary_mode: true,
            payer: {
                name: name,
                surname: id,
                email: email,
                phone: {
                    number: 99999999999,
                    area_code: "54",
                },
                address: {
                    zip_code: '11011',
                    street_name: 'street name',
                    street_number: 999,
                },
            },
            shipments: {
                receiver_address: {
                    zip_code: '11011',
                    street_name: "street name",
                    street_number: 999,
                    floor: "floor",
                    apartment: 'apartment',
                    city_name: '111',
                    state_name: 'state name',
                    country_name: 'argentina',
                }
            },
            additional_info: 'prueba1',
            items: [
                {
                    picture_url: 'https://w7.pngwing.com/pngs/483/429/png-transparent-quality-assurance-emblem-label-logo.png',
                    title: 'Premium Plan',
                    unit_price: 3000,
                    quantity: 1,
                    description: 'Pago de servicio para obtener el plan premium',
                }
            ],
            back_urls: {
                'success': 'http://localhost:3001/feedback',
                'failure': 'http://localhost:3000',
                'pending': 'http://localhost:3001/feedback',
            },
            auto_return: 'approved',
        }
    }
}