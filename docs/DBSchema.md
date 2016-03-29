BOARDS

| Column    | Type    | Details                 |
| ----------|---------|------------------------ |
| Title     | String  | Not null                |
| Author ID | Integer | Not null, foreign key   |

CARDS

| Column    | Type    | Details                 |
| ----------|---------|------------------------ |
| Title     | String  | Not null                |
| List ID   | Integer | Not null, foreign key   |
| Author ID | Integer | Not null, foreing key   |

COMMENTS

| Column    | Type    | Details                 |
| ----------|---------|------------------------ |
| Body      | String  | Not null                |
| Author ID | Integer | Not null, foreign key   |
| Card ID   | Integer | Not null, foreign key   |




