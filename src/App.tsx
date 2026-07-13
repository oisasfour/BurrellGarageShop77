import React, { useState, useEffect } from "react";

/*
𝐕.𝐌.𝐎. 𝐋𝐔𝐂𝐊𝐘 𝐒𝐏𝐄𝐄𝐃 𝐂𝐔𝐒𝐓𝐎𝐌
requisition system
no login
blue red theme
*/

type MenuItem = {
  id: number;
  category: string;
  name: any;
  price: number;
  img: string;
};

export default function App() {
  /* employee */

  const employees = [
    "Luther_Alexei_Morozov",
    "Jann_Burrell",
    "Kenji_Oyama",
    "Tsukuyomi_Takuya",
    "Shikishima_Sendou",
    "Marco_Tempesta",
    "Draco_banks",
    "Jason Aoapo",
    "Ryan cooper",
    "Nash Wilder",
    "Yume Kawasumi",
    "Edgar_Malone",

  ];

  /* customer */
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyiDOq89bHfEiip0TZS08RnqBvAn71XKvthICWiUbBMtCB9_TOD85MTVV38Bv7J1PpQUA/exec"
    )
      .then((r) => r.json())

      .then((data) => {
        const map: any = {};

        data.forEach((i: any) => {
          map[i.id] = i.qty;
        });

        setStock(map);
        setLoading(false); // โหลดเสร็จ
      })

      .catch(() => {
        setLoading(false);
      });
  }, []);

  const [employee, setEmployee] = useState("");

  const [note, setNote] = useState("");

  /* product */

  const [category, setCategory] = useState("custom");

  const [search, setSearch] = useState("");

  /* cart */

  const [cart, setCart] = useState<any[]>([]);
  const [stock, setStock] = useState<any>({});
  const [loading, setLoading] = useState(true);

  /* status */

  const [popup, setPopup] = useState("");

  const [sending, setSending] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  /* auto reset */

  useEffect(() => {
    if (!submitted) return;

    const t = setTimeout(() => {
      setSubmitted(false);

      setSending(false);

      setCart([]);

      setNote("");

      setEmployee("");
    }, 2000);

    return () => clearTimeout(t);
  }, [submitted]);

  /* popup auto hide */

  useEffect(() => {
    if (!popup) return;

    const t = setTimeout(() => setPopup(""), 2000);

    return () => clearTimeout(t);
  }, [popup]);

  /* menu */

  const menuData: MenuItem[] = [
    // CUSTOMS

    {
      id: 101,
      category: "custom",
      name: { th: "Performance Parts" },
      price: 10000,
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-10-215327.png",
    },
    {
      id: 104,
      category: "custom",
      name: { th: "Cosmetic Parts" },
      price: 1000,
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-215058.png",
    },

    {
      id: 107,
      category: "custom",
      name: { th: "Respray Kit" },
      price: 2000,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-214850.png",
    },

    {
      id: 103,
      category: "custom",
      name: { th: "Vehicle Wheels Set" },
      price: 2000,
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-215128.png",
    },

    
    {
      id: 106,
      category: "custom",
      name: { th: "Extras_Kit" },
      price: 1000,
      img: "https://img1.pic.in.th/images/Screenshot-2026-05-21-011419.png",
    },

    
    
    {
      id: 102,
      category: "custom",
      name: { th: "Stancer Kit" },
      price: 1000,
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-10-215441.png",
    },
    {
      id: 108,
      category: "custom",
      name: { th: "Carplay" },
      price: 2000,
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-12-041049.png",
    },

    // Core Parts
    {
      id: 201,
      category: "Core Parts",
      name: { th: "Repair Kit" },
      price: 300,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212455.png",
    },
    {
      id: 206,
      category: "Core Parts",
      name: { th: "Alternator" },
      price: 600,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212548.png",
    },
    {
      id: 209,
      category: "Core Parts",
      name: { th: "Brakes" },
      price: 600,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212448.png",
    },
    

    {
      id: 202,
      category: "Core Parts",
      name: { th: "Fuel Injector" },
      price: 600,
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-212409.png",
    },

    {
      id: 203,
      category: "Core Parts",
      name: { th: "Power Steering Pump" },
      price: 600,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212341.png",
    },

   
    {
      id: 207,
      category: "Core Parts",
      name: { th: "Radiator" },
      price: 600,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212523.png",
    },

    {
      id: 208,
      category: "Core Parts",
      name: { th: "Transmission" },
      price: 600,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212507.png",
    },
    {
      id: 205,
      category: "Core Parts",
      name: { th: "EV Battery" },
      price: 600,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212351.png",
    },

    
    {
      id: 204,
      category: "Core Parts",
      name: { th: "Electric Motor" },
      price: 600,
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-212501.png",
    },

 

    // Service
    {
      id: 312,
      category: "Service",
      name: { th: "Air Filter" },
      price: 400,
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-212553.png",
    },
   {
      id: 310,
      category: "Service",
      name: { th: "Brake Fluid" },
      price: 400,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212538.png",
    },
 {
      id: 305,
      category: "Service",
      name: { th: "Brake Pads" },
      price: 400,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-214628.png",
    },
 {
      id: 309,
      category: "Service",
      name: { th: "Coolant" },
      price: 400,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-214454.png",
    },
 {
      id: 304,
      category: "Service",
      name: { th: "Drive Belt" },
      price: 400,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-214705.png",
    },
{
      id: 303,
      category: "Service",
      name: { th: "Fuel Filter" },
      price: 400,
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-10-215321.png",
    },
 {
      id: 302,
      category: "Service",
      name: { th: "Oil Filter" },
      price: 400,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212532.png",
    },
 {
      id: 306,
      category: "Service",
      name: { th: "Steering Fluid" },
      price: 400,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212438.png",
    },
 {
      id: 307,
      category: "Service",
      name: { th: "Spark Plugs" },
      price: 400,
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-214549.png",
    },
    {
      id: 301,
      category: "Service",
      name: { th: "Tires" },
      price: 400,
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-214750.png",
    },
{
      id: 313,
      category: "Service",
      name: { th: "Transmission Fluid" },
      price: 400,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212558.png",
    },
    {
      id: 311,
      category: "Service",
      name: { th: "Battery Coolant" },
      price: 400,
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-212515.png",
    },
   {
      id: 308,
      category: "Service",
      name: { th: "High Voltage Wiring" },
      price: 400,
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212429.png",
    },
  ];
  /* cart */

  const add = (item: any) => {
    const current = cart.find((i) => i.id === item.id)?.qty || 0;

    const max = stock[item.id] || 0;

    if (current >= max) {
      setPopup("ของไม่พอ");

      return;
    }
    setCart((prev) => {
      const f = prev.find((p) => p.id == item.id);

      if (f)
        return prev.map((p) =>
          p.id == item.id ? { ...p, qty: Math.min(p.qty + 1, 999) } : p
        );

      return [...prev, { ...item, qty: 1 }];
    });
  };

  const minus = (id: number) => {
    setCart((prev) =>
      prev

        .map((p) => (p.id == id ? { ...p, qty: p.qty - 1 } : p))

        .filter((p) => p.qty > 0)
    );
  };

  const changeQty = (id: number, val: number) => {
    const max = stock[id] || 0;

    if (val < 1) val = 1;

    if (val > max) val = max;

    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: val } : p)));
  };

  /* filter */

  const filtered = menuData

    .filter((item) => item.category === category)

    .filter((item) =>
      item.name.th

        .toLowerCase()

        .includes(search.toLowerCase())
    );

  /* total */

  const total = cart.reduce(
    (s, i) => s + i.price * i.qty,

    0
  );

  /* submit */

  const submit = async () => {
    if (!employee) return setPopup("เลือกชื่อผู้เบิก");

    if (cart.length == 0) return setPopup("ไม่มีสินค้า");

    setSending(true);

    const order = cart.map((i) => `${i.name.th} x ${i.qty}`).join(", ");

    await fetch(
      "https://script.google.com/macros/s/AKfycbyiDOq89bHfEiip0TZS08RnqBvAn71XKvthICWiUbBMtCB9_TOD85MTVV38Bv7J1PpQUA/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          employee: employee,

          order: order,

          note: note,

          total: total.toString(),

          cart: JSON.stringify(
            cart.map((i) => ({
              id: i.id,

              qty: i.qty,
            }))
          ),
        }),
      }
    );

    setSubmitted(true);
  };
  /* success */

  if (submitted) return <div style={successBox}>เบิกสำเร็จ</div>;

  /* UI */

  return (
    <div style={page}>
      {loading && (
        <div style={loadingOverlay}>
          <div className="spinner" />
        </div>
      )}

      <h2 style={title}>𝐕.𝐌.𝐎. 𝐋𝐔𝐂𝐊𝐘 𝐒𝐏𝐄𝐄𝐃 𝐂𝐔𝐒𝐓𝐎𝐌</h2>
      <h2 style={title}>กดรีเฟรชทุกครั้ง ก่อนกดเบิก</h2>
      <select
        value={employee}
        onChange={(e) => setEmployee(e.target.value)}
        style={input}
      >
        <option>เลือกผู้เบิก</option>

        {employees.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </select>

      <div style={tabs}>
        <button
          onClick={() => setCategory("custom")}
          style={tab(category == "custom")}
        >
          Customs
        </button>

        <button
          onClick={() => setCategory("Core Parts")}
          style={tab(category == "Core Parts")}
        >
          Core Parts
        </button>

        <button
          onClick={() => setCategory("Service")}
          style={tab(category == "Service")}
        >
          Service
        </button>
      </div>

      <input
        placeholder="ค้นหา"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={input}
      />

      {filtered.map((item) => (
        <div key={item.id} style={card}>
          <img src={item.img} style={img} />

          <div style={{ flex: 1 }}>
            <div>{item.name.th}</div>

            <div>{item.price} ฿</div>
            <div>เหลือ {stock[item.id] ?? 0} ชิ้น</div>
            <button
              onClick={() => add(item)}
              disabled={(stock[item.id] || 0) === 0}
              style={{
                ...addBtn,
                opacity: (stock[item.id] || 0) === 0 ? 0.5 : 1,
              }}
            >
              {(stock[item.id] || 0) === 0 ? "หมด" : "เพิ่ม"}
            </button>
          </div>
        </div>
      ))}

      <h3>รายการ</h3>

      {cart.map((i) => (
        <div key={i.id} style={cartRow}>
          {i.name.th}

          <div>
            <button onClick={() => minus(i.id)}>-</button>

            <input
              type="number"
              value={i.qty}
              min={1}
              max={999}
              onChange={(e) =>
                changeQty(
                  i.id,

                  Number(e.target.value)
                )
              }
            />

            <button onClick={() => add(i)}>+</button>
          </div>
        </div>
      ))}

      <h2>รวม {total}</h2>

      <textarea
        placeholder="Note ใส่หรือไม่ใส่ก็ได้"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={input}
      />

      <button onClick={submit} disabled={sending} style={submitBtn}>
        {sending ? "กำลังส่ง..." : "เบิก"}
      </button>

      {popup && (
        <div style={popupBg}>
          <div style={popupBox}>{popup}</div>
        </div>
      )}
    </div>
  );
}

/* style */
const loadingOverlay: React.CSSProperties = {
  position: "fixed",

  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  background: "rgba(255,255,255,0.3)",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  zIndex: 999,
};

const spinner: React.CSSProperties = {
  width: 40,
  height: 40,

  border: "4px solid rgba(0,0,0,0.15)",

  borderTop: "4px solid #1565c0",

  borderRadius: "50%",

  animation: "spin 0.5s linear infinite",
};

const page = {
  maxWidth: "100%",
  margin: "auto",
  padding: 20,
  background: "#262626",
  fontFamily: "Poppins",
};

const title = {
  color: "#0d47a1",
};

const input = {
  width: "100%",
  marginTop: 10,
  padding: 12,
  borderRadius: 12,
  border: "1px solid #262626",
};

const tabs = {
  display: "flex",
  gap: 10,
  marginTop: 15,
};

const tab = (active: boolean) => ({
  background: active ? "#0b386b" : "#858585",

  color: active ? "#858585" : "#0d47a1",

  border: "none",
  padding: "8px 14px",
  borderRadius: 20,
  cursor: "pointer",
});

const card = {
  display: "flex",
  gap: 10,
  background: "#4d4d4d",
  padding: 12,
  marginTop: 12,
  borderRadius: 14,
};

const img: React.CSSProperties = {
  width: 60,
  height: 60,
  borderRadius: 10,
  objectFit: "cover",
};

const addBtn = {
  background: "#e53935",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: 20,
};

const cartRow = {
  display: "flex",
  justifyContent: "space-between",
  background: "#262626",
  padding: 10,
  marginTop: 8,
  borderRadius: 10,
};

const submitBtn = {
  width: "100%",
  marginTop: 15,
  padding: 14,
  background: "#0d47a1",
  color: "white",
  border: "none",
  borderRadius: 25,
  fontSize: 16,
};

const popupBg: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "#262626",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const popupBox = {
  background: "#262626",
  padding: 25,
  borderRadius: 15,
};

const successBox = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 28,
  color: "#0d47a1",
};
