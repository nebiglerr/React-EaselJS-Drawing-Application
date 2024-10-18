import React, { useEffect, useRef, useState } from 'react';
import { Stage, Shape, Ticker } from '@createjs/easeljs';
import { v4 as uuidv4 } from 'uuid';
const App = () => {
  const canvasRef = useRef(null);
  const stageRef = useRef(null); // EaselJS stage referansı
  const [shapes, setShapes] = useState([]);
  const [selectedId, setSelectedId] = useState(null); // Seçilen şeklin ID'sini tutar

  useEffect(() => {
    // EaselJS Sahnesini başlatma
    const stage = new Stage(canvasRef.current);
    stageRef.current = stage;

    // Canvas'ı her 60 FPS'de güncelle
    Ticker.framerate = 60;
    Ticker.addEventListener('tick', stage);

    return () => {
      Ticker.removeEventListener('tick', stage);
    };
  }, []);

  // Renk güncelleme: Seçilen şeklin rengi değişsin
  const updateShapeColor = (shape) => {
    const newColor = shape.isSelected ? '#FF6347' : '#000000'; // Seçili ise kırmızı, değilse siyah
    if (shape.type === 'rect') {
      shape.graphics.clear().beginFill(newColor).drawRect(0, 0, 100, 50);
    } else if (shape.type === 'circle') {
      shape.graphics.clear().beginFill(newColor).drawCircle(0, 0, 50);
    } else if (shape.type === 'line') {
      shape.graphics.clear().setStrokeStyle(2).beginStroke(newColor).moveTo(0, 0).lineTo(100, 100);
    }
    stageRef.current.update();
  };

  // Şekil ekleme fonksiyonları
  const addRectangle = () => {
    const rectangle = new Shape();
    rectangle.graphics.beginFill(`#${Math.floor(Math.random() * 16777215).toString(16)}`).drawRect(0, 0, 100, 50);
    rectangle.x = Math.random() * window.innerWidth;
    rectangle.y = Math.random() * window.innerHeight;
    rectangle.id = uuidv4(); // Benzersiz ID
    rectangle.type = 'rect'; // Şekil tipi
    rectangle.width = 100;
    rectangle.height = 50;
    rectangle.on("pressmove", (evt) => {
      evt.currentTarget.x = evt.stageX;
      evt.currentTarget.y = evt.stageY;
      stageRef.current.update();
    });
    rectangle.on("click", () => {
      setSelectedId(rectangle.id); // Şekil tıklanınca ID'yi seç
    });
    stageRef.current.addChild(rectangle);
    setShapes([...shapes, rectangle]);
    stageRef.current.update(); // Sahneyi güncelle
  };

  const addCircle = () => {
    const circle = new Shape();
    circle.graphics.beginFill(`#${Math.floor(Math.random() * 16777215).toString(16)}`).drawCircle(0, 0, 50);
    circle.x = Math.random() * window.innerWidth;
    circle.y = Math.random() * window.innerHeight;
    circle.id = uuidv4(); // Benzersiz ID
    circle.type = 'circle'; // Şekil tipi
    circle.radius = 50;
    circle.on("pressmove", (evt) => {
      evt.currentTarget.x = evt.stageX;
      evt.currentTarget.y = evt.stageY;
      stageRef.current.update();
    });
    circle.on("click", () => {
      setSelectedId(circle.id); // Şekil tıklanınca ID'yi seç
    });
    stageRef.current.addChild(circle);
    setShapes([...shapes, circle]);
    stageRef.current.update(); // Sahneyi güncelle
  };
  const addLine = () => {
    const line = new Shape();
    line.graphics.setStrokeStyle(2).beginStroke(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    line.graphics.moveTo(0, 0).lineTo(100, 100);  // Çizgi başlangıç ve bitiş noktaları
    line.x = Math.random() * window.innerWidth;
    line.y = Math.random() * window.innerHeight;
    line.id = uuidv4(); // Benzersiz ID
    line.type = 'line'; // Şekil tipi
    line.points = [0, 0, 100, 100];
    line.on("pressmove", (evt) => {
      evt.currentTarget.x = evt.stageX;
      evt.currentTarget.y = evt.stageY;
      stageRef.current.update();
    });
    line.on("click", () => {
      setSelectedId(line.id); // Şekil tıklanınca ID'yi seç
    });
    stageRef.current.addChild(line);
    setShapes([...shapes, line]);
    stageRef.current.update(); // Sahneyi güncelle
  };
  // Seçilen öğeyi sil
  const deleteSelectedShape = () => {
    if (selectedId) {
      const shapeToDelete = shapes.find((shape) => shape.id === selectedId);
      if (shapeToDelete) {
        stageRef.current.removeChild(shapeToDelete); // Sahneden kaldır
        setShapes(shapes.filter((shape) => shape.id !== selectedId)); // State'den kaldır
        setSelectedId(null); // Seçimi sıfırla
        stageRef.current.update();
      }
    }
  };

  // Tüm öğeleri sil
  const deleteAllShapes = () => {
    shapes.forEach((shape) => {
      stageRef.current.removeChild(shape); // Sahnedeki tüm şekilleri kaldır
    });
    setShapes([]); // State'i temizle
    setSelectedId(null); // Seçimi sıfırla
    stageRef.current.update();
  };

  // JSON formatında dışa aktarma
  const exportToJson = () => {
    const jsonShapes = shapes.map((shape) => {
      if (shape.type === 'rect') {
        return {
          id: shape.id,
          type: 'rect',
          x: shape.x,
          y: shape.y,
          width: 100,
          height: 50,
          color: shape.graphics._fill.style,
        };
      } else if (shape.type === 'circle') {
        return {
          id: shape.id,
          type: 'circle',
          x: shape.x,
          y: shape.y,
          radius: 50,
          color: shape.graphics._fill.style,
        };
      } else if (shape.type === 'line') {
        return {
          id: shape.id,
          type: 'line',
          x: shape.x,
          y: shape.y,
          points: [0, 0, 100, 100],
          color: shape.graphics._stroke.style,
        };
      }
      return null;
    });
    const json = JSON.stringify(jsonShapes);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shapes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // JSON dosyasını içe aktarma
  const importFromJson = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const importedShapes = JSON.parse(event.target.result);
      importedShapes.forEach((data) => {
        const shape = new Shape();
        shape.id = data.id; // ID'yi geri yükle
        if (data.type === 'rect') {
          shape.graphics.beginFill(data.color).drawRect(0, 0, data.width, data.height);
        } else if (data.type === 'circle') {
          shape.graphics.beginFill(data.color).drawCircle(0, 0, data.radius);
        } else if (data.type === 'line') {
          shape.graphics.setStrokeStyle(2).beginStroke(data.color).moveTo(0, 0).lineTo(100, 100);
        }
        shape.x = data.x;
        shape.y = data.y;
        shape.on("pressmove", (evt) => {
          evt.currentTarget.x = evt.stageX;
          evt.currentTarget.y = evt.stageY;
          stageRef.current.update();
        });
        shape.on("click", () => {
          setSelectedId(shape.id); // Yüklenen şekli seçebilme
          shape.isSelected = !shape.isSelected;
          updateShapeColor(shape);
        });
        stageRef.current.addChild(shape);
      });
      setShapes(stageRef.current.children);
      stageRef.current.update();
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <button onClick={addRectangle}>Add Rectangle</button>
      <button onClick={addCircle}>Add Circle</button>
      <button onClick={addLine}>Add Line</button>
      <button onClick={deleteSelectedShape}>Delete Selected Shape</button>
      <button onClick={deleteAllShapes}>Delete All Shapes</button>
      <button onClick={exportToJson}>Export to JSON</button>
      <input type="file" accept="application/json" onChange={importFromJson} />
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};

export default App;
