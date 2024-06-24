import mediapipe as mp
import cv2
import numpy as np
import pandas as pd 
import pickle

mp_drawing=mp.solutions.drawing_utils
mp_pose=mp.solutions.pose
with open('/Users/shaunpereira/Desktop/yeshu/github/workout-project/backend/subprocess/squats.pkl', 'rb') as f:
    model=pickle.load(f)
    
cap = cv2. VideoCapture (0)
counter=0
current_stage=''
landmarks = ['class']
for val in range(1, 33+1):
    landmarks += ['x{}'.format(val), 'y{}'. format(val), 'z{}'. format(val),'v{}'.format(val)]

with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
    while cap.isOpened():
        ret, image = cap. read ()
# Recolor Feed
        image = cv2.cvtColor (image, cv2.COLOR_BGR2RGB)
        image. flags.writeable = False
        
        results = pose. process (image)
        
        image.flags. writeable = True
        image = cv2.cvtColor (image, cv2.COLOR_RGB2BGR)
        
        mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose. POSE_CONNECTIONS
                                    , mp_drawing. DrawingSpec(color=(0,255,0), thickness=2, circle_radius=4), 
                                    mp_drawing. DrawingSpec(color=(0,0,255), thickness=2, circle_radius=2)
                                
        )
        try:
            row = np.array([[res.x, res.y, res.z, res.visibility]for res in results.pose_landmarks.landmark]).flatten().tolist()  # Show the Bounding Box around the Body
            X = pd.DataFrame([row], columns=landmarks[1:])
            body_language_class = model.predict(X)[0]
            body_language_prob = model.predict_proba(X)[0]
            
            
            
            if body_language_class == 'down' and body_language_prob[body_language_prob.argmax()]>=0.55: 
                current_stage = 'down'
            elif current_stage =='down' and body_language_class =='up' and body_language_prob[body_language_prob.argmax()]>0.55:
                current_stage="up"
                counter =counter+1
                

            cv2. rectangle(image, (0,0), (250, 60), (245, 117, 16), - 1)
# Display CLass
            cv2. putText (image, 'CLASS',
                    (95,12), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1, cv2.LINE_AA)
            cv2.putText(image, body_language_class.split(' ')[0], (85,40), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2,cv2.LINE_AA)
            
            cv2. putText(image, 'PROB',(15,12), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1, cv2.LINE_AA)
            cv2. putText(image, str(round(body_language_prob[np.argmax(body_language_prob)], 2)), (5,40), cv2. FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2. LINE_AA)
 
 
            cv2. putText (image, 'COUNT', (198,12), cv2. FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1, cv2.LINE_AA)
            cv2. putText (image,str(counter), (220,40), cv2. FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2,cv2.LINE_AA)
            if counter >= 10:
                break
            
        
        except Exception as e:
            print(e)
            pass
        
        
        cv2. imshow( 'Raw Webcam Feed', image)
        if cv2.waitKey (10) & 0xFF == ord('q'):
            break
cap. release ( )
cv2. destroyAllWindows ()